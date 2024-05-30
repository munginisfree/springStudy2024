//디바운싱 함수 정의
export function debounce(callback, wait) {
    let timer;

    return (...value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(...value);
        }, wait);
    };
}