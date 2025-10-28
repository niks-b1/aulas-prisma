export function arearetangulo(altura, largura){
    return altura * largura
}

export function perimetroretangulo(altura, largura){
    return (altura + largura) * 2
}

export function areacirculo(raio){
    return Math.floor(Math.PI * Math.pow(raio, 2))
}

export function perimetrocirculo(raio){
    return Math.floor(2 * Math.PI * raio)
}