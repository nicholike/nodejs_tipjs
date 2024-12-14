// 'use strict';

// level 0

// const config = {
//     app: {
//         port: 3000
//     },
//     db: {
//         host: 'localhost',
//         port: 27017, // Sửa từ 'post' thành 'port'
//         name: 'db'  // Sửa từ `name'db'` thành `name: 'db'`
//     }
// };


// level 1
'use strict';

const dev = {
    app: {
        port: process.env.DEV_APP_PORT || 3052
    },
    db: {
        host: process.env.DEV_DB_HOST || 'localhost',
        port: process.env.DEV_DB_PORT || 27017,
        name: process.env.DEV_DB_NAME || 'shopDEV'
    }
};

const pro = {
    app: {
        port: process.env.PRO_APP_PORT || 3000
    },
    db: {
        host: process.env.PRO_DB_HOST || 'localhost',
        port: process.env.PRO_DB_PORT || 27017,
        name: process.env.PRO_DB_NAME || 'shopPRO'
    }
};

// Xác định môi trường dựa trên NODE_ENV (mặc định là 'dev')
const config = { dev, pro };
const env = process.env.NODE_ENV || 'dev';
// console.log(config[env], env)

module.exports = config[env];