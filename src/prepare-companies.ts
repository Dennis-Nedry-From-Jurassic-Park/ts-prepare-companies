import { Share } from "../protos_ts/instruments";
import clickhouse from "../db/clickhouse"
import {v4 as uuidv4} from 'uuid';

const table = 'companies_temp_mem_2'

const create_companies_table = `
    CREATE TABLE IF NOT EXISTS ${table} (
        dt DateTime DEFAULT now(),
        figi String,
        ticker String,
        classCode String,
        isin String,
        lot UInt32,
        currency String,
        shortEnabledFlag Bool,
        name String,
        exchange LowCardinality(String),
        countryOfRisk LowCardinality(String),
        sector LowCardinality(String),
        tradingStatus UInt8,
        otcFlag Bool,
        buyAvailableFlag Bool,
        sellAvailableFlag Bool,
        shareType UInt8
    )
    ENGINE = MergeTree()
    partition by tuple ()
    ORDER BY tuple()
    SETTINGS index_granularity = 8192
`;

const fetch_companies_group_by = async(fetch_column:string, column: string) => {
    clickhouse.sessionId = uuidv4();
    
    const req = `
        SELECT
        sector,
        groupArray(${fetch_column})
        FROM ${table}
        WHERE 1=1 
        AND shareType = 1 OR shareType = 2
        GROUP BY ${column}
    `
    await clickhouse.query(req).toPromise();
}

const prepare_companies_data = async () => {
    clickhouse.sessionId = uuidv4();

    await clickhouse.query(`DROP TABLE IF EXISTS ${table} ;`).toPromise();

    clickhouse.sessionId = uuidv4();

    //console.log(create_companies_table)

    await clickhouse.query(create_companies_table).toPromise();

    let rows: any[] = [];
    const data: Share[] = require('../RU_shares.json');
    data.forEach( (s:Share) => {
        rows.push({
            figi: s.figi,
            ticker: s.ticker,
            classCode: s.classCode,
            isin: s.isin,
            lot: s.lot,
            currency: s.currency,
            shortEnabledFlag: +!!s.shortEnabledFlag,
            name: s.name,
            exchange: s.exchange,
            countryOfRisk: s.countryOfRisk,
            sector: s.sector,
            tradingStatus: s.tradingStatus,
            otcFlag: s.otcFlag,
            buyAvailableFlag: s.buyAvailableFlag,
            sellAvailableFlag: s.sellAvailableFlag,
            shareType: s.shareType
        })
    });

    clickhouse.sessionId = uuidv4();
    
    await clickhouse.insert(
        `INSERT INTO ${table} (
            figi,
            ticker,
            classCode,
            isin,
            lot,
            currency,
            shortEnabledFlag,
            name,
            exchange,
            countryOfRisk,
            sector,
            tradingStatus,
            otcFlag,
            buyAvailableFlag,
            sellAvailableFlag,
            shareType
        ) `.replace(/\n|\r/g, ""),
        rows
    ).toPromise();
    // await fetch_companies_group_by('figi', 'sector');   
    await fetch_companies_group_by('ticker', 'sector');
}

prepare_companies_data();