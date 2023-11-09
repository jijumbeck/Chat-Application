// Interface for getting default name for users without name.
interface DefaultNameGenerator {
    getDefaultName(): string;
}

class DogNameGenerator implements DefaultNameGenerator {
    readonly defaultUserNames: string[] = [
        "Корги", "Джек Рассел", "Лабрадор", "Пудель", "Хаски", "Бульдожик",
        "Мопсик", "Волчара",
    ];

    producedNamesCount: number = 0;

    getDefaultName(): string {
        let total = Math.floor(this.producedNamesCount / this.defaultUserNames.length)
        let index = this.producedNamesCount % this.defaultUserNames.length;

        this.producedNamesCount++;

        return total === 0
            ? this.defaultUserNames[index]
            : this.defaultUserNames[index] + ` #${total}`;
    }
}

export const dogNameGenerator = new DogNameGenerator();