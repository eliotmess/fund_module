import { ELocalStorage } from "constants/index";

class LocalStorageService {
    public get(key: ELocalStorage) {
        return localStorage.getItem(key);
    }

    public set(key: ELocalStorage, value: string) {
        return localStorage.setItem(key, value);
    }

    public remove(key: ELocalStorage) {
        localStorage.removeItem(key);
    }
}

export default new LocalStorageService();