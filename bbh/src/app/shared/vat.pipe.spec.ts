import { VatPipe } from './vat.pipe';

describe('VatPipe', () => {
  it('create an instance', () => {
    const pipe = new VatPipe();
    expect(pipe).toBeTruthy();
  });

  it('transform value to vat', () => {
    const pipe = new VatPipe();
    const vatValue = pipe.transform(10);
    expect(vatValue).toBe('10 + 2.30 VAT')
  })
});
