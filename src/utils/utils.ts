import moment from 'moment';
import i18n from '../translations/strings';
import { Colors } from '../colors';
import { EventStatusPayment } from '../store/admin/handle-reservation.store';

export function getMonthName(month: number) {
  return [
    i18n.t('common.january'),
    i18n.t('common.february'),
    i18n.t('common.march'),
    i18n.t('common.april'),
    i18n.t('common.may'),
    i18n.t('common.june'),
    i18n.t('common.july'),
    i18n.t('common.august'),
    i18n.t('common.september'),
    i18n.t('common.october'),
    i18n.t('common.november'),
    i18n.t('common.december'),][month -1]
}

export function getStringDateName(date: any) {

  const dayNumber = moment(date, "YYYY-MM-DD").format('DD');
  const month = getMonthName(parseInt(moment(date, "YYYY-MM-DD").format('M')))
  const year = moment(date, "YYYY-MM-DD").format('YYYY');

  return dayNumber + ' ' + month + ' ' + year

}

export function getDateTimeBooking(date: any) {

  const time = date.slice(11, 16)
  const dayFormat = moment(date, "YYYY-MM-DD").format('DD-MM-YYYY');

  return {
    'time': time,
    'day': dayFormat
  };
}

export function getRoom(rooms: any[], idRoom: string) {
  return rooms.find((room: any) => room.id === idRoom);
}

export function getRoomLayouts(rooms: any[], idRoom: string) {
  return rooms.find((room: any) => room.id === idRoom).layouts;
}

export function getSmartObject(smartObjects: any[], idSmartObject: string) {
  return smartObjects.find((smartObjects: any) => smartObjects.id === idSmartObject).name;
}

export function getServiceName(item: any, room: any) {
  const selectedServices = item.services;
  const commonServiceNames = selectedServices.map((serviceId: string) => {
    const commonService = room.services.find((service: any) => service.id === serviceId);
    return commonService ? commonService.name : '';
  });

  return commonServiceNames;
}

export function getDisplayNameStatusBooking(itemStatus: any) {
  let statusBooking: { [key: string]: string } = {
    'SENT': i18n.t('reservations.sent'),
    'CONFIRMED': i18n.t('reservations.confirmed'),
    'CANCELED_BY_USER': i18n.t('reservations.canceledByUSer'),
    'CANCELED_BY_ADMIN': i18n.t('reservations.canceledByAdmin'),
    'CANCEL_REQUESTED': i18n.t('reservations.cancelRequested'),

  }
  return statusBooking[itemStatus]
}

export function getDisplayColorStatusBooking(itemStatus: any) {
  let statusBooking: { [key: string]: string } = {
    'SENT': Colors.Sent,
    'CONFIRMED': Colors.PrimaryDark,
    'CANCELED_BY_USER': Colors.Grey,
    'CANCELED_BY_ADMIN': Colors.Grey,
    'CANCEL_REQUESTED': Colors.Grey,

  }
  return statusBooking[itemStatus]
}

export function getDisplayNamePaymentEventStatus(itemStatus: any) {
  return EventStatusPayment.find((eventStatus: any) => eventStatus.id === itemStatus)?.name
}
