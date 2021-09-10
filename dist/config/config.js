"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configuration = void 0;
const configuration = () => ({
    port: Number(process.env.PORT),
    jwtSecret: process.env.JWT_SECRET,
});
exports.configuration = configuration;
//# sourceMappingURL=config.js.map