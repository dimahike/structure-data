import "jasmine";
import List from "../list";

describe("List", () => {

	it("should add item", () => {
		const list = new List<number>();

		expect(list.add( 1, 0)).toEqual({0: 1});
	});

	it('should add text items', function () {
		const list = new List<string>();
		list.add("Hi", 0);
		list.add("there", 1);

		expect(list.add("!",2)).toEqual({
			0: "Hi",
			1: "there",
			2: "!"
		});
	});

	it('should add text items', function () {
		const list = new List<string>();
	 list.add( "Hi", 0);
	 list.add( "there", 1);

		expect(list.add("!", 2)).toEqual({
			0: "Hi",
			1: "there",
			2: "!"
		});
	});

	it('should get text item and print', function () {
		const list = new List<string>();
		list.add("Hi", 0);
		list.add("there", 1);
		list.add("!", 2);

		expect(list.print()).toEqual("Hi there !");
	});

	it('should print the list in reverse order', function () {
		const list = new List<string>();
		list.add('1')
		list.add('2')
		list.add('3')
		list.add('4')
		list.add('5')


		expect(list.reverse()).toBe('5 4 3 2 1');
		expect(list.print()).toBe('1 2 3 4 5');

	});

	it('should read item', function () {
		const list = new List();
		list.add(1, 0);

		expect(list.get(0)).toEqual(1);
	});

	it("should remove item", () => {
		const list = new List();
		list.add("1", );
		list.add("2");
		list.add("3");

		expect(list.remove(1)).toEqual({
			0: "1",
			1: "3"
		});
	})

	it('should clear the list', function () {
		const list = new List();
		list.add("some item", 0);
		list.add( "some item 2", 1);

		expect(list.clear()).toEqual({});
	});

	it("should remove item", () => {
		const list = new List();
		list.add("1", );
		list.add("2");
		list.add("3");


		expect(	list.length()).toEqual(3);
	})
})