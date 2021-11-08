import { default as entityData } from "./entity-data.json";
import { default as entityMeta } from "./entity-meta.json";

export function getEntityMeta() {
  const { field } = entityMeta;

  // Map entity data to meta and fake async op with `Promise`
  return Promise.resolve({
    ...entityMeta,
    field: field.map((f) => ({
      ...f,
      value: (entityData as any)[f.name] ?? null,
    })),
  });
}

export function getEntityData() {
  return Promise.resolve(entityData);
}
