// @generated by protobuf-ts 2.2.2 with parameter generate_dependencies
// @generated from protobuf file "instruments.proto" (package "tinkoff.public.invest.api.contract.v1", syntax proto3)
// tslint:disable
import type { RpcTransport } from "@protobuf-ts/runtime-rpc";
import type { ServiceInfo } from "@protobuf-ts/runtime-rpc";
import { InstrumentsService } from "./instruments";
import type { EditFavoritesResponse } from "./instruments";
import type { EditFavoritesRequest } from "./instruments";
import type { GetFavoritesResponse } from "./instruments";
import type { GetFavoritesRequest } from "./instruments";
import type { AssetsResponse } from "./instruments";
import type { AssetsRequest } from "./instruments";
import type { AssetResponse } from "./instruments";
import type { AssetRequest } from "./instruments";
import type { GetDividendsResponse } from "./instruments";
import type { GetDividendsRequest } from "./instruments";
import type { InstrumentResponse } from "./instruments";
import type { GetFuturesMarginResponse } from "./instruments";
import type { GetFuturesMarginRequest } from "./instruments";
import type { GetAccruedInterestsResponse } from "./instruments";
import type { GetAccruedInterestsRequest } from "./instruments";
import type { SharesResponse } from "./instruments";
import type { ShareResponse } from "./instruments";
import type { FuturesResponse } from "./instruments";
import type { FutureResponse } from "./instruments";
import type { EtfsResponse } from "./instruments";
import type { EtfResponse } from "./instruments";
import type { CurrenciesResponse } from "./instruments";
import type { CurrencyResponse } from "./instruments";
import type { GetBondCouponsResponse } from "./instruments";
import type { GetBondCouponsRequest } from "./instruments";
import type { BondsResponse } from "./instruments";
import type { InstrumentsRequest } from "./instruments";
import type { BondResponse } from "./instruments";
import type { InstrumentRequest } from "./instruments";
import { stackIntercept } from "@protobuf-ts/runtime-rpc";
import type { TradingSchedulesResponse } from "./instruments";
import type { TradingSchedulesRequest } from "./instruments";
import type { UnaryCall } from "@protobuf-ts/runtime-rpc";
import type { RpcOptions } from "@protobuf-ts/runtime-rpc";
/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.InstrumentsService
 */
export interface IInstrumentsServiceClient {
    /**
     * Метод получения расписания торгов торговых площадок.
     *
     * @generated from protobuf rpc: TradingSchedules(tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest) returns (tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse);
     */
    tradingSchedules(input: TradingSchedulesRequest, options?: RpcOptions): UnaryCall<TradingSchedulesRequest, TradingSchedulesResponse>;
    /**
     * Метод получения облигации по её идентификатору.
     *
     * @generated from protobuf rpc: BondBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.BondResponse);
     */
    bondBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, BondResponse>;
    /**
     * Метод получения списка облигаций.
     *
     * @generated from protobuf rpc: Bonds(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.BondsResponse);
     */
    bonds(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, BondsResponse>;
    /**
     * Метод получения графика выплат купонов по облигации
     *
     * @generated from protobuf rpc: GetBondCoupons(tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest) returns (tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse);
     */
    getBondCoupons(input: GetBondCouponsRequest, options?: RpcOptions): UnaryCall<GetBondCouponsRequest, GetBondCouponsResponse>;
    /**
     * Метод получения валюты по её идентификатору.
     *
     * @generated from protobuf rpc: CurrencyBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.CurrencyResponse);
     */
    currencyBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, CurrencyResponse>;
    /**
     * Метод получения списка валют.
     *
     * @generated from protobuf rpc: Currencies(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.CurrenciesResponse);
     */
    currencies(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, CurrenciesResponse>;
    /**
     * Метод получения инвестиционного фонда по его идентификатору.
     *
     * @generated from protobuf rpc: EtfBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.EtfResponse);
     */
    etfBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, EtfResponse>;
    /**
     * Метод получения списка инвестиционных фондов.
     *
     * @generated from protobuf rpc: Etfs(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.EtfsResponse);
     */
    etfs(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, EtfsResponse>;
    /**
     * Метод получения фьючерса по его идентификатору.
     *
     * @generated from protobuf rpc: FutureBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.FutureResponse);
     */
    futureBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, FutureResponse>;
    /**
     * Метод получения списка фьючерсов.
     *
     * @generated from protobuf rpc: Futures(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.FuturesResponse);
     */
    futures(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, FuturesResponse>;
    /**
     * Метод получения акции по её идентификатору.
     *
     * @generated from protobuf rpc: ShareBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.ShareResponse);
     */
    shareBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, ShareResponse>;
    /**
     * Метод получения списка акций.
     *
     * @generated from protobuf rpc: Shares(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.SharesResponse);
     */
    shares(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, SharesResponse>;
    /**
     * Метод получения накопленного купонного дохода по облигации.
     *
     * @generated from protobuf rpc: GetAccruedInterests(tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse);
     */
    getAccruedInterests(input: GetAccruedInterestsRequest, options?: RpcOptions): UnaryCall<GetAccruedInterestsRequest, GetAccruedInterestsResponse>;
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам.
     *
     * @generated from protobuf rpc: GetFuturesMargin(tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest) returns (tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse);
     */
    getFuturesMargin(input: GetFuturesMarginRequest, options?: RpcOptions): UnaryCall<GetFuturesMarginRequest, GetFuturesMarginResponse>;
    /**
     * Метод получения основной информации об инструменте.
     *
     * @generated from protobuf rpc: GetInstrumentBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.InstrumentResponse);
     */
    getInstrumentBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, InstrumentResponse>;
    /**
     * Метод для получения событий выплаты дивидендов по инструменту.
     *
     * @generated from protobuf rpc: GetDividends(tinkoff.public.invest.api.contract.v1.GetDividendsRequest) returns (tinkoff.public.invest.api.contract.v1.GetDividendsResponse);
     */
    getDividends(input: GetDividendsRequest, options?: RpcOptions): UnaryCall<GetDividendsRequest, GetDividendsResponse>;
    /**
     * Метод получения актива по его идентификатору.
     *
     * @generated from protobuf rpc: GetAssetBy(tinkoff.public.invest.api.contract.v1.AssetRequest) returns (tinkoff.public.invest.api.contract.v1.AssetResponse);
     */
    getAssetBy(input: AssetRequest, options?: RpcOptions): UnaryCall<AssetRequest, AssetResponse>;
    /**
     * Метод получения списка активов.
     *
     * @generated from protobuf rpc: GetAssets(tinkoff.public.invest.api.contract.v1.AssetsRequest) returns (tinkoff.public.invest.api.contract.v1.AssetsResponse);
     */
    getAssets(input: AssetsRequest, options?: RpcOptions): UnaryCall<AssetsRequest, AssetsResponse>;
    /**
     * Метод получения избранных инструментов.
     *
     * @generated from protobuf rpc: GetFavorites(tinkoff.public.invest.api.contract.v1.GetFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.GetFavoritesResponse);
     */
    getFavorites(input: GetFavoritesRequest, options?: RpcOptions): UnaryCall<GetFavoritesRequest, GetFavoritesResponse>;
    /**
     * Метод редактирования избранных инструментов.
     *
     * @generated from protobuf rpc: EditFavorites(tinkoff.public.invest.api.contract.v1.EditFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.EditFavoritesResponse);
     */
    editFavorites(input: EditFavoritesRequest, options?: RpcOptions): UnaryCall<EditFavoritesRequest, EditFavoritesResponse>;
}
/**
 * Сервис предназначен для получения:</br>**1**. информации об инструментах;</br>**2**.
 * расписания торговых сессий;</br>**3**. календаря выплат купонов по облигациям;</br>**4**.
 * размера гарантийного обеспечения по фьючерсам;</br>**5**. дивидендов по ценной бумаге.
 *
 * @generated from protobuf service tinkoff.public.invest.api.contract.v1.InstrumentsService
 */
export class InstrumentsServiceClient implements IInstrumentsServiceClient, ServiceInfo {
    typeName = InstrumentsService.typeName;
    methods = InstrumentsService.methods;
    options = InstrumentsService.options;
    constructor(private readonly _transport: RpcTransport) {
    }
    /**
     * Метод получения расписания торгов торговых площадок.
     *
     * @generated from protobuf rpc: TradingSchedules(tinkoff.public.invest.api.contract.v1.TradingSchedulesRequest) returns (tinkoff.public.invest.api.contract.v1.TradingSchedulesResponse);
     */
    tradingSchedules(input: TradingSchedulesRequest, options?: RpcOptions): UnaryCall<TradingSchedulesRequest, TradingSchedulesResponse> {
        const method = this.methods[0], opt = this._transport.mergeOptions(options);
        return stackIntercept<TradingSchedulesRequest, TradingSchedulesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения облигации по её идентификатору.
     *
     * @generated from protobuf rpc: BondBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.BondResponse);
     */
    bondBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, BondResponse> {
        const method = this.methods[1], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentRequest, BondResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка облигаций.
     *
     * @generated from protobuf rpc: Bonds(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.BondsResponse);
     */
    bonds(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, BondsResponse> {
        const method = this.methods[2], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentsRequest, BondsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения графика выплат купонов по облигации
     *
     * @generated from protobuf rpc: GetBondCoupons(tinkoff.public.invest.api.contract.v1.GetBondCouponsRequest) returns (tinkoff.public.invest.api.contract.v1.GetBondCouponsResponse);
     */
    getBondCoupons(input: GetBondCouponsRequest, options?: RpcOptions): UnaryCall<GetBondCouponsRequest, GetBondCouponsResponse> {
        const method = this.methods[3], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetBondCouponsRequest, GetBondCouponsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения валюты по её идентификатору.
     *
     * @generated from protobuf rpc: CurrencyBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.CurrencyResponse);
     */
    currencyBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, CurrencyResponse> {
        const method = this.methods[4], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentRequest, CurrencyResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка валют.
     *
     * @generated from protobuf rpc: Currencies(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.CurrenciesResponse);
     */
    currencies(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, CurrenciesResponse> {
        const method = this.methods[5], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentsRequest, CurrenciesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения инвестиционного фонда по его идентификатору.
     *
     * @generated from protobuf rpc: EtfBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.EtfResponse);
     */
    etfBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, EtfResponse> {
        const method = this.methods[6], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentRequest, EtfResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка инвестиционных фондов.
     *
     * @generated from protobuf rpc: Etfs(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.EtfsResponse);
     */
    etfs(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, EtfsResponse> {
        const method = this.methods[7], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentsRequest, EtfsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения фьючерса по его идентификатору.
     *
     * @generated from protobuf rpc: FutureBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.FutureResponse);
     */
    futureBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, FutureResponse> {
        const method = this.methods[8], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentRequest, FutureResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка фьючерсов.
     *
     * @generated from protobuf rpc: Futures(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.FuturesResponse);
     */
    futures(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, FuturesResponse> {
        const method = this.methods[9], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentsRequest, FuturesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения акции по её идентификатору.
     *
     * @generated from protobuf rpc: ShareBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.ShareResponse);
     */
    shareBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, ShareResponse> {
        const method = this.methods[10], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentRequest, ShareResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка акций.
     *
     * @generated from protobuf rpc: Shares(tinkoff.public.invest.api.contract.v1.InstrumentsRequest) returns (tinkoff.public.invest.api.contract.v1.SharesResponse);
     */
    shares(input: InstrumentsRequest, options?: RpcOptions): UnaryCall<InstrumentsRequest, SharesResponse> {
        const method = this.methods[11], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentsRequest, SharesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения накопленного купонного дохода по облигации.
     *
     * @generated from protobuf rpc: GetAccruedInterests(tinkoff.public.invest.api.contract.v1.GetAccruedInterestsRequest) returns (tinkoff.public.invest.api.contract.v1.GetAccruedInterestsResponse);
     */
    getAccruedInterests(input: GetAccruedInterestsRequest, options?: RpcOptions): UnaryCall<GetAccruedInterestsRequest, GetAccruedInterestsResponse> {
        const method = this.methods[12], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetAccruedInterestsRequest, GetAccruedInterestsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения размера гарантийного обеспечения по фьючерсам.
     *
     * @generated from protobuf rpc: GetFuturesMargin(tinkoff.public.invest.api.contract.v1.GetFuturesMarginRequest) returns (tinkoff.public.invest.api.contract.v1.GetFuturesMarginResponse);
     */
    getFuturesMargin(input: GetFuturesMarginRequest, options?: RpcOptions): UnaryCall<GetFuturesMarginRequest, GetFuturesMarginResponse> {
        const method = this.methods[13], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetFuturesMarginRequest, GetFuturesMarginResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения основной информации об инструменте.
     *
     * @generated from protobuf rpc: GetInstrumentBy(tinkoff.public.invest.api.contract.v1.InstrumentRequest) returns (tinkoff.public.invest.api.contract.v1.InstrumentResponse);
     */
    getInstrumentBy(input: InstrumentRequest, options?: RpcOptions): UnaryCall<InstrumentRequest, InstrumentResponse> {
        const method = this.methods[14], opt = this._transport.mergeOptions(options);
        return stackIntercept<InstrumentRequest, InstrumentResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод для получения событий выплаты дивидендов по инструменту.
     *
     * @generated from protobuf rpc: GetDividends(tinkoff.public.invest.api.contract.v1.GetDividendsRequest) returns (tinkoff.public.invest.api.contract.v1.GetDividendsResponse);
     */
    getDividends(input: GetDividendsRequest, options?: RpcOptions): UnaryCall<GetDividendsRequest, GetDividendsResponse> {
        const method = this.methods[15], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetDividendsRequest, GetDividendsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения актива по его идентификатору.
     *
     * @generated from protobuf rpc: GetAssetBy(tinkoff.public.invest.api.contract.v1.AssetRequest) returns (tinkoff.public.invest.api.contract.v1.AssetResponse);
     */
    getAssetBy(input: AssetRequest, options?: RpcOptions): UnaryCall<AssetRequest, AssetResponse> {
        const method = this.methods[16], opt = this._transport.mergeOptions(options);
        return stackIntercept<AssetRequest, AssetResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения списка активов.
     *
     * @generated from protobuf rpc: GetAssets(tinkoff.public.invest.api.contract.v1.AssetsRequest) returns (tinkoff.public.invest.api.contract.v1.AssetsResponse);
     */
    getAssets(input: AssetsRequest, options?: RpcOptions): UnaryCall<AssetsRequest, AssetsResponse> {
        const method = this.methods[17], opt = this._transport.mergeOptions(options);
        return stackIntercept<AssetsRequest, AssetsResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод получения избранных инструментов.
     *
     * @generated from protobuf rpc: GetFavorites(tinkoff.public.invest.api.contract.v1.GetFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.GetFavoritesResponse);
     */
    getFavorites(input: GetFavoritesRequest, options?: RpcOptions): UnaryCall<GetFavoritesRequest, GetFavoritesResponse> {
        const method = this.methods[18], opt = this._transport.mergeOptions(options);
        return stackIntercept<GetFavoritesRequest, GetFavoritesResponse>("unary", this._transport, method, opt, input);
    }
    /**
     * Метод редактирования избранных инструментов.
     *
     * @generated from protobuf rpc: EditFavorites(tinkoff.public.invest.api.contract.v1.EditFavoritesRequest) returns (tinkoff.public.invest.api.contract.v1.EditFavoritesResponse);
     */
    editFavorites(input: EditFavoritesRequest, options?: RpcOptions): UnaryCall<EditFavoritesRequest, EditFavoritesResponse> {
        const method = this.methods[19], opt = this._transport.mergeOptions(options);
        return stackIntercept<EditFavoritesRequest, EditFavoritesResponse>("unary", this._transport, method, opt, input);
    }
}