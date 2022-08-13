import styles from "../style"
import Button from './Button'

const CTA = () => (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
        <div className='flex-1 flex flex-col'>
            <h2 className={styles.heading2}>Let's try our service now!'</h2>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                With the right credit card, you can improve your financial life by building credit and saving money.
            </p>
        </div>

        <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
            <Button />
        </div>
    </section>
)

export default CTA
