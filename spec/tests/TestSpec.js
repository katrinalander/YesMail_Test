describe("Unit tests", function() {

    var obj = {name:'John',parent:'Sue'};
    var newObj = {name:"Sue",children:[{name:"John",children:[]}]};

    var sample = [{"name":"John","children":[]},{"name":"Garth","children":[]}];
    var res = "<span> (name: John children: [])</span><span> (name: Garth children: [])</span>";

    it("function child() to be defined", function() {
        expect(child).not.toBeUndefined();
    });

    it("function child() converted list from parent to children", function() {
        expect(child(obj)).toEqual(newObj);
    });

    it("function printPeopleArr() to be defined", function() {
        expect(printPeopleArr).not.toBeUndefined();
    });

    it("function printUpdated() to be defined", function() {
        expect(printUpdated).not.toBeUndefined();
    });

    it("function printChild() to be defined", function() {
        expect(printChild).not.toBeUndefined();
    });

    it("function printChild() converted fron JSON to String", function() {
        expect(printChild(sample, 0)).toEqual(res);
    });
});
