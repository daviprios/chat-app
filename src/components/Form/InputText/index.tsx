import { useEffect, useState } from 'react'
import styles from './index.module.sass'

const InputText = (props: {
  getValue: (value: string) => void
}) => {
  const { getValue } = props

  const [value, setValue] = useState('')

  useEffect(() => {
    getValue(value)
  }, [value])

  return (
    <input
      className={styles.input}
      type={'text'}
      value={value}
      onChange={e => setValue(e.currentTarget.value)}
    />
  )
}

export default InputText