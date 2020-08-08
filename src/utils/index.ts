/* eslint-disable no-unused-vars */
import { v4 } from 'uuid'
import { ValueTransformer } from 'typeorm'

export const uuid = (): string => {
  return v4()
}

export class ColumnNumericTransformer implements ValueTransformer {
  to (value: number): number {
    return value
  }

  from (value: string): number {
    return parseFloat(value)
  }
}
