export const formatarTempo = (tempo: number) => {
    const minutos = Math.floor(tempo / 60);
    const segundos = tempo % 60;
    return `${minutos.toString().padStart(2, "0")}: ${segundos.toString().padStart(2, "0")}`;
};