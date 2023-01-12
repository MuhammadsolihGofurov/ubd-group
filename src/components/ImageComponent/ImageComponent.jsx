import Image from "next/image";

import styles from './ImageComponent.module.scss';

const ImageComponent = ({ src, alt }) => (
    <Image
        src={src}
        alt={alt}
        placeholder="blurDataURL"
        sizes="100vw"
        width={0}
        height={0}
        className={styles.image}
    />
)

export default ImageComponent;