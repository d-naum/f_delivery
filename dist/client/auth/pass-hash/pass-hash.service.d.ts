export declare class PassHashService {
    hashPassword(password: string): Promise<string>;
    comparePassword(plainText: any, encryptedPass: any): Promise<boolean>;
}
