import styles from './ImageBox.module.scss'

function ImageBox(props: { children: React.ReactNode }) {
  return (
    <figure className={styles.ImageBox}>
      {props.children}
    </figure>
  )
}

export default ImageBox