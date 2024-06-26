export interface BackendResponse {
  content: Content[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  number: number;
  size: number;
  sort: Sort;
  first: boolean;
  numberOfElements: number;
  empty: boolean;
}

export interface Content {
  idApiGee: number;
  operdate: Date;
  type: Type;
  logTimestamp: Date;
  operation: Operation;
  developerAppName: string;
  transactionStatus: number;
  subscriberId: number;
  offeringId: number;
  montoRecarga: number;
  comision: number;
  montoNeto: null;
  provider: Provider;
  realProvider: string;
  idPos: string;
  channelOfSale: ChannelOfSale;
  pipeOfSale: PipeOfSale;
  orderId: string;
  beId: number;
  mvno: string;
  creation: Date;
  idStatusCxProvider: number;
  statusCxProvider: StatusCx;
  idStatusCxMvno: number;
  statusCxMvno: StatusCx;
  idTxProvider: number | null;
  idTxMvno: number | null;
  idCutProvider: number;
  idCutMvno: number;
  idStatusCutProvider: number | null;
  statusCutProvider: StatusCut;
  idStatusCutMvno: null;
  statusCutMvno: StatusCut;
  base: boolean;
}

export enum ChannelOfSale {
  Cambaceo = 'CAMBACEO',
  DistribuidorRecarga = 'DISTRIBUIDOR_RECARGA',
  ECommerce = 'E_COMMERCE',
  Empty = '',
  MobileApp = 'MOBILE_APP',
  PuntoDeVentaPropio = 'PUNTO_DE_VENTA_PROPIO',
  Retailer = 'RETAILER',
}

export enum Operation {
  CompraDeBonosSuplementarios = 'Compra de Bonos Suplementarios',
}

export enum PipeOfSale {
  Empty = '',
  GatewayRecarga = 'GATEWAY_RECARGA',
}

export enum Provider {
  ConceptoMovil = 'ConceptoMovil',
  Gestopago = 'Gestopago',
  MTCenter = 'MTCenter',
  Openpay = 'Openpay',
  Pagaphone = 'Pagaphone',
  TelecommTelegrafos = 'Telecomm Telegrafos',
  Xtreme = 'Xtreme',
}

export enum StatusCut {
  Registrado = 'Registrado',
  SinCorte = 'Sin Corte',
}

export enum StatusCx {
  Conciliada = 'Conciliada',
  ConciliadaPorAclaración = 'Conciliada por aclaración',
  NoConciliada = 'No Conciliada',
}

export enum Type {
  Out = 'out',
}

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  unpaged: boolean;
  paged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}
