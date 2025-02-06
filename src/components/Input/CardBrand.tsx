import {FieldSelectType} from '@/hooks/useForm';

type CardBrandProps = {
  cardBrand: FieldSelectType;
};

const brands = ['BC카드', '신한카드', '카카오뱅크', '현대카드', '우리카드', '롯데카드', '하나카드', '국민카드'];

export const CardBrand = ({cardBrand}: CardBrandProps) => {
  const placeholder = '카드사를 선택해주세요';

  return (
    <section className="flex flex-col gap-2">
      <fieldset className="flex w-full gap-[10]">
        <select
          autoFocus
          className="flex-1 w-full border border-border rounded-sm p-2 text-xs/3"
          defaultValue={cardBrand.value === '' ? placeholder : cardBrand.value}
          onChange={cardBrand.onChange}
        >
          <option value={placeholder} disabled hidden>
            {placeholder}
          </option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </fieldset>
    </section>
  );
};
