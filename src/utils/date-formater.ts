export function formatDate(
  metaData: any,
  value: FormDataEntryValue | null
): FormDataEntryValue | string | null {
  if (!metaData || metaData.dataType !== "Date") return value;
  const val = value?.toString().trim();
  return !!val ? new Date(val).toISOString() : value;
}
