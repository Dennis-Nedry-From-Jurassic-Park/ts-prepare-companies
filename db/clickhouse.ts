import {ClickHouse} from 'clickhouse';


class ClickHouseExt extends ClickHouse {
	constructor() {
        super({
			url: 'http://localhost',
			port: 9000,
			debug: true,
			//basicAuth: null,
			basicAuth: {
				username: 'default',
				password: '',
			},
			isUseGzip: true,
			format: 'json',
			raw: false,
			config: {
				session_id                              : 'gergregegrgre',
				session_timeout                         :  90,
				output_format_json_quote_64bit_integers :  0,
				enable_http_compression                 :  0,
				database                                : '',
			}
		});
    };

	logQueries =  (queries:any[]) => {

	};
}

const clickhouse = new ClickHouseExt();

export default clickhouse;