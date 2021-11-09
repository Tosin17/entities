import { getEntityMeta, getEntityData } from "./entities";
import { default as entityData } from "./entity-data.json";

test("should return metatdat mapped with values", () => {
  return getEntityMeta().then((data) => {
    expect(data.field.map((d) => d.value)).toContain("WILLIAM WINTON HARLEY");
  });
});

it("should return entititData", () => {
  expect(getEntityData()).toEqual(entityData);
});
