"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStatusDTO = exports.UpdateDeliveryPoscodesDTO = exports.UpdateDeliveryTimesDTO = exports.UpdateCompanyDTO = void 0;
const class_validator_1 = require("class-validator");
class UpdateCompanyDTO {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "name", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "imprint", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    __metadata("design:type", Number)
], UpdateCompanyDTO.prototype, "minDeliveryAmount", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateCompanyDTO.prototype, "status", void 0);
exports.UpdateCompanyDTO = UpdateCompanyDTO;
class UpdateDeliveryTimesDTO {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateDeliveryTimesDTO.prototype, "day", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateDeliveryTimesDTO.prototype, "startTime", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateDeliveryTimesDTO.prototype, "endTime", void 0);
exports.UpdateDeliveryTimesDTO = UpdateDeliveryTimesDTO;
class UpdateDeliveryPoscodesDTO {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsInt(),
    __metadata("design:type", String)
], UpdateDeliveryPoscodesDTO.prototype, "number", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateDeliveryPoscodesDTO.prototype, "long", void 0);
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateDeliveryPoscodesDTO.prototype, "lat", void 0);
exports.UpdateDeliveryPoscodesDTO = UpdateDeliveryPoscodesDTO;
class UpdateStatusDTO {
}
__decorate([
    class_validator_1.IsOptional(),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UpdateStatusDTO.prototype, "status", void 0);
exports.UpdateStatusDTO = UpdateStatusDTO;
//# sourceMappingURL=update-company.dto.js.map