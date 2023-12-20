export const environments = {
    port: process.env.PORT || 3001,
    connectionDB: process.env.PATH_CONNECTION_DB || 'mongodb+srv://zejano:Vf2ua0K01vtiTe6N@cluster0.drfseoi.mongodb.net/prueba',
    jwt: {
        salt: process.env.JWT_SALT || 10,
        secret: process.env.SECRET_JWT || 'wSRUDbYYcTi6ghuxVPheJqGFVf3fPuefP3LjEyN6u5',
        expired: process.env.EXPIRATION_JWT_TOKEN || '3600s',
    },
    urlGetUF: process.env.URLGETUF || 'https://api.cmfchile.cl/api-sbifv3/recursos_api/uf/',
    urlGetUFFinal: process.env.URLGETUFFINAL || '?apikey=66a23f9065cab137fe5e6f01353245bab0026aff&formato=JSON'

}