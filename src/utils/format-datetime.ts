import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export function formatDateTime(date: string) {
    const d = new Date(date);
    return format(d, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })
}