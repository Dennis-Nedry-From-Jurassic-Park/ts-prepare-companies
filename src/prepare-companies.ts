import { Share } from "../protos_ts/instruments";
import clickhouse from "../db/clickhouse"

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
        sector LowCardinality(String)
    )
    ENGINE = MergeTree()
    partition by tuple ()
    ORDER BY tuple()
    SETTINGS index_granularity = 8192
`;

const prepare_companies_data = async () => {
    await clickhouse.query(`DROP TABLE ${table}`).toPromise();

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
            sector: s.sector
        })
    });

    clickhouse.sessionId = '1fasfsa532532fsa2';
    
    await clickhouse.insert(
        `INSERT INTO ${table} (figi,ticker,classCode,isin,lot,currency,shortEnabledFlag,name,exchange,countryOfRisk,sector) `,
        rows
    ).toPromise();
}

prepare_companies_data();