export enum FirmStatuses {
  active = `active`,
  paused = `paused`,
  inactive = `inactive`,
  liquidation = `liquidation`,
}

export type FirmStatusType = keyof typeof FirmStatuses;

export const COLOR_FIRM_STATUS_ACTIVE = `#44C29C`;
export const COLOR_FIRM_STATUS_SUSPENDED = `#FFA500`;
export const COLOR_FIRM_STATUS_INACTIVE = `#FF0202`;

export const FirmStatusColor = new Map<FirmStatusType, string>()
  .set(FirmStatuses.liquidation, COLOR_FIRM_STATUS_SUSPENDED)
  .set(FirmStatuses.paused, COLOR_FIRM_STATUS_SUSPENDED)
  .set(FirmStatuses.active, COLOR_FIRM_STATUS_ACTIVE)
  .set(FirmStatuses.inactive, COLOR_FIRM_STATUS_INACTIVE);
