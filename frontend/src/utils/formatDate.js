import { format, parseJSON } from 'date-fns';

export default function formatDate(date) {
    if (date?.length === 10) {
        date += "T00:00:00.000Z";
    }

    return date ? format(parseJSON(date), 'dd/MM/yyyy') : '--/--/----';
}