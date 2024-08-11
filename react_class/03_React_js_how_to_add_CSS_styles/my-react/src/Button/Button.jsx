import styles from './Button.module.css'

        function Button(){
            return(
                // use the dynamic value (class name will be give unique if you insepect inthe web)
                <button className={styles.button}> Click me  </button>
                );
                }
        export default Button