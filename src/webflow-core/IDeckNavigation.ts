
interface IDeckNavigation {

    // Methods
    goToFirst(): void;
    goToLast(): void;
    goToNext(): void;
    goToPrev(): void;
    goToIndex(index: number): void;

    // Properties with getter and setter
    currentNum: number; // This acts as a shorthand for both getter and setter
    currentIndex: number;
    count: number;

    // If you want to define explicit get and set methods:
    // getCurrentNum(): number;
    // setCurrentNum(value: number): void;
    // getCurrentIndex(): number;
    // setCurrentIndex(value: number): void;

}

