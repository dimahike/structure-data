type TStore<T> = Record<number,  T>

class List<T> {

	private store: TStore<T> = {};

	add( value: T, index: number = Object.keys(this.store).length,): TStore<T> {
		this.store[index] = value;

		return this.store;
	}

	get(index: number): T {
		return this.store[index]
	}

	remove(index: number): TStore<T> {
		return this.store = Object.keys(this.store).reduce<TStore<T>>((acc: TStore<T>, key: unknown) => {
			return key == index ? acc : {...acc, [Object.keys(acc).length]: this.store[key as number]}
		}, {});
	}

	print(): string {
		return Object.keys(this.store).map((key: unknown) => this.store[key as number]).join(" ");
	}

	reverse(): string {
		return Object.keys(this.store).reverse().map((key: unknown) => this.store[key as number]).join(" ");
	}

	clear(): TStore<T> {
		this.store = {};

		return this.store;
	}

	length(): number {
		return Object.keys(this.store).length;
	}
}

export default List;