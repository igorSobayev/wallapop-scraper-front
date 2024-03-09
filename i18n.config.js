export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'es',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    messages: {
      en: {
        welcome: 'Welcome',
        succesfullyRegistered: `You're almost there!`,
        passwordsNotMatch: 'Passwords do not match!',
        required: 'Required',
        user: 'User',
        password: 'Password',
        repeatPassword: 'Repeat Password',
        signup: 'Register',
        registerFormSend: `You just need to verify your address in the email we sent you!`,
        login: 'Login',
        forgotPassword: 'Forgot your password?',
        privateProfile: 'Private profile',
        recipesWip: 'Recipes on progress',
        publicRecipes: 'Public recipes',
        seePublicPage: 'View public page',
        following: 'Following',
        followers: 'Followers',
        editRecipe: 'Edit recipe',
        avgTimeToLong: 'The average time is too long',
        recipeSuccessfullyUpdated: 'Recipe successfully updated!',
        name: 'Name',
        title: 'Title',
        avgTime: 'Average time',
        difficulty: 'Difficulty',
        description: 'Description',
        featuredImg: 'Featured image',
        updatedFeaturedImg: 'Update featured image',
        additionalImgs: 'Additional images',
        currentImgs: 'Current images',
        newImgs: 'New images',
        updateImgs: 'Update images',
        additionalNotes: 'Additional notes',
        ingredients: 'Ingredients',
        tomatoes: 'Tomatoes',
        steps: 'Steps',
        stepsLower: 'steps',
        stepsPlaceholder: 'We cut the tomatoes into slices about 2 cm long...',
        versions: 'Versions',
        deleteVersion: 'Delete version',
        versionName: 'Version name',
        importNameAndIngredients: 'Import name and ingredients',
        save: 'Save',
        forgotPasswordTitle: 'Forgot password',
        passwordRecovered: 'Password successfully retrieved',
        getResetCode: 'Get recovery code',
        resetCode: 'Recovery code',
        newPassword: 'New password',
        repeatNewPassword: 'Repeat new password',
        changePassword: 'Change password',
        configuration: 'Configuration',
        passwordUpdated: 'Password successfully updated!',
        edit: 'Edit',
        cancel: 'Cancel',
        recommended: 'Recommended',
        surname: 'LastName',
        currentPassword: 'Current Password',
        update: 'Update',
        viewProfile: 'View profile',
        addNewRecipe: 'Add new recipe',
        myProfile: 'My profile',
        myRecipes: 'My recipes',
        addRecipe: 'Create recipe',
        logout: 'Log out',
        logedAs: 'Logged in as',
        previewRecipe: 'Preview recipe',
        publishRecipe: 'Publish recipe',
        deleteRecipe: 'Delete recipe',
        unpublishRecipe: 'Unpublish recipe',
        recipePublished: 'Recipe published!',
        recipeUnpublished: 'Unpublished recipe!',
        recipeDeleted: 'Recipe Deleted!',
        youFollowed: 'You have followed',
        youUnfollowed: 'You have unfollowed',
        follow: 'Follow',
        unfollow: 'Unfollow',
        recipes: 'Recipes',
        activeSince: 'Active since ',
        lastRecipes: 'Last recipes',
        home: 'Home',
        viewRecipe: 'View recipe',
        favoriteRecipes: 'Favorite recipes',
        recipeTitleRequired: 'The recipe title is required',
        recipeSlug: 'URL to the recipe',
        recipeSlugDescription: 'This URL generates from the title on publish the recipe',
        update_preference_daily: 'Every day',
        update_preference_twice: 'Every 12 hours',
        update_preference_six_hours: 'Every 6 hours',
        update_preference_three_hours: 'Every 3 hours',
        update_preference_one_hour: 'Every hour',
        compare_date_last_element: 'Last sync',
        compare_date_twelve: '12 hours',
        compare_date_yesterday: 'Yesterday',
        compare_date_three_days: '3 days ago',
        compare_date_five_days: '5 days ago',
        compare_date_one_week: 'Ago one week',
        compare_date_first_element: 'First sync',
        username: 'Username',
        home_header_subtitle: 'Our configurator allows you to keep track of all your products in one place with configurable updates',
        home_header_tag: 'The #1 Wallapop tracker',
        home_header_adv_1: 'Price updates',
        home_header_adv_2: 'Number of visits',
        home_header_adv_3: 'Growth of favourites',
        home_header_adv_4: 'Status changes',
        home_header_demo_placeholder: 'Test by adding a product link',
        home_header_try_btn: 'Try it!',
        home_header_title: `Check the <span class="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">status</span> of your Wallapop products <span class="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">in seconds</span>!`,
        demo_title: 'Title',
        demo_views: 'Views',
        demo_favs: 'Likes',
        demo_price: 'Price',
        demo_sync: 'Date sync',
        demo_state: 'Status',
        demo_items_sync_info: 'Sync info',
        demo_items_archive: 'Archive',
        demo_items_delete: 'Delete',
        demo_error_product_removed: 'The product has been removed from the platform',
        demo_error_try_valid: 'Try a valid link',
        demo_error_title: 'An error occurred while loading the demo',
        demo_sync_info: 'Update information',
        demo_dates_compare: 'Date of data comparison:',
        product_state_available: 'Available',
        product_state_sold: 'Sold',
        product_state_reserved: 'Reserved',
        product_state_removed: 'Removed',
        how_it_works: 'How it works',
        how_subtitle: 'Start tracking all your products today',
        how_step_one_title: 'Enter the product link',
        how_step_one_desc: 'Search in Wallapop for the product you want to track and copy its link into the tracker',
        how_step_two_title: 'The bot searches for the information',
        how_step_two_desc: 'An initial automatic search will be performed to load the product information',
        how_step_three_title: 'Receives updates',
        how_step_three_desc: 'Once the information is loaded, the bot will perform periodic updates to build a history of the evolution of the product status',
        who_title: 'Who should use it?',
        who_subtitle: 'The tracker is ideal for all types of profiles',
        who_buyer: 'Buyers',
        who_buyer_text_one: 'Do you want to be always up to date with the products that interest you on Wallapop?',
        who_buyer_text_two: 'Simply enter the link of the product you are interested in, and receive updates on price changes, visits, favourites and availability',
        who_buyer_text_three: `Save time and don't miss out with Wallatracker!`,
        who_buyer_adv_one: 'Constant updates',
        who_buyer_adv_two: 'Informed decisions',
        who_buyer_adv_three: 'Time saving',
        who_buyer_adv_four: 'Efficient scanning',
        who_seller: 'Sellers',
        who_seller_text_one: 'Do you want to manage all your products for sale from a single dashboard?',
        who_seller_text_two: 'With Wallatracker you will be able to make the best decisions to know if your product is well configured',
        who_seller_text_three: 'Thanks to the constant updates, you will be able to know the trends and if your product is being visited',
        who_seller_text_four: 'Save time and make better decisions!',
        who_seller_adv_one: 'Save time',
        who_seller_adv_two: 'Efficient management',
        who_seller_adv_three: 'Smart decisions',
        who_seller_adv_four: 'Speed of reaction',
        home_pricing_title: 'Pricing',
        home_pricing_subtitle: 'Cut your product management time in half',
        home_pricing_text_one: 'Build your tracking table in seconds',
        home_pricing_text_two: 'Start optimising today!',
        pricing_table_free_plan_title: 'Free plan',
        pricing_table_free_plan_adv_one: 'Daily updates',
        pricing_table_free_plan_try_free: 'Free trial',
        pricing_table_free_plan_footer: 'No card needed!',
        pricing_table_medium_plan_title: 'Medium plan',
        pricing_table_medium_plan_adv_one: 'Updates every 24/12/6 hours',
        pricing_table_medium_plan_try: 'Get median plan now',
        pricing_table_no_payment_footer: 'One-time payment. No subscription!',
        pricing_table_premium_tag: 'MOST POPULAR',
        pricing_table_premium_title: 'Premium Plan',
        pricing_table_premium_adv_one: 'Hourly updates',
        pricing_table_premium_adv_two: 'Manual Synchronisation',
        pricing_table_premium_adv_three: 'Historical comparison',
        pricing_table_premium_try: 'Start now',
        new_track: 'New Track',
        new_track_placeholder: 'Add link to the product or list of links separated by commas',
        new_track_add: 'Add new track',
        next_update_on: 'Next sync:',
        tracks_update_tracks_info_btn: 'Sync tracks',
        tracks_date_compare: 'Date to compare info:',
        config_actual_plan: 'Plan:',
        config_tracks_num: 'Tracks number:',
        config_update_dates: 'Sync configuration:',
        config_active_since: 'Active since:',
        privacy_policy_title: 'Privacy Policy',
        privacy_policy_text_1: `Your privacy is important to us. It is Wallatracker's policy to respect your privacy regarding any information we may collect from you across our website, and other sites we own and operate.`,
        privacy_policy_text_2: `We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we're collecting it and how it will be used.`,
        privacy_policy_text_4: `We only retain collected information for as long as necessary to provide you with your requested service. What data we store, we'll protect within commercially acceptable means to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or modification.`,
        privacy_policy_text_5: `We don't share any personally identifying information publicly or with third-parties, except when required to by law.`,
        privacy_policy_text_6: `We act in the capacity of a data controller and a data processor with regard to the personal data processed through Wallatracker and the services in terms of the applicable data protection laws, including the EU General Data Protection Regulation (GDPR).`,
        privacy_policy_text_7: `Our website may link to external sites that are not operated by us. Please be aware that we have no control over the content and practices of these sites, and cannot accept responsibility or liability for their respective privacy policies.`,
        privacy_policy_text_8: `You are free to refuse our request for your personal information, with the understanding that we may be unable to provide you with some of your desired services.`,
        privacy_policy_text_9: `Your continued use of our website will be regarded as acceptance of our practices around privacy and personal information. If you have any questions about how we handle user data and personal information, feel free to contact us.`,
        privacy_policy_text_10: `This policy is effective as of 17 Feb 2024.`,
        tos_title: 'Terms and Conditions',
        tos_introduction: `Introduction`,
        tos_introduction_text: `By using Wallatracker you confirm your acceptance of, and agree to be bound by, these terms and conditions.`,
        tos_agreement: `Agreement to Terms and Conditions`,
        tos_agreement_text: `This Agreement takes effect on the date on which you first use the Wallatracker application.`,
        tos_access: `Unlimited Access Software License with Termination Rights`,
        tos_access_text_one: `The Wallatracker Software License facilitates the acquisition of Wallatracker software through a single purchase, granting users unrestricted and perpetual access to its comprehensive functionalities. Tailored for independent creators, entrepreneurs, and small businesses, Wallatracker empowers users to stay updated on the status of this products from one single table.`,
        tos_access_text_two: `This license entails a straightforward and flexible arrangement, exempting users from recurring fees or subscriptions. However, it is important to acknowledge that the licensor retains the right to terminate the license without conditions or prerequisites. This termination provision enables the licensor to exercise control over software distribution and utilization.`,
        tos_access_text_three: `Opting for the Wallatracker Software License enables users to enjoy the benefits of the software while recognizing the licensor's unrestricted termination rights, which provide adaptability and address potential unforeseen circumstances.`,
        tos_refunds: `Refunds`,
        tos_refunds_text: `Wallatracker only offers refunds within the first 7 days of use or within the first 30 tracks`,
        tos_disclaimer: `Disclaimer`,
        tos_disclaimer_text: `It is not warranted that Wallatracker will meet your requirements or that its operation will be uninterrupted or error free. All express and implied warranties or conditions not stated in this Agreement (including without limitation, loss of profits, loss or corruption of data, business interruption or loss of contracts), so far as such exclusion or disclaimer is permitted under the applicable law are excluded and expressly disclaimed. This Agreement does not affect your statutory rights.`,
        tos_warranties: `Warranties and Limitation of Liability`,
        tos_warranties_text_one: `Wallatracker does not give any warranty, guarantee or other term as to the quality, fitness for purpose or otherwise of the software. `,
        tos_warranties_text_two: `Wallatracker shall not be liable to you by reason of any representation (unless fraudulent), or any implied warranty, condition or other term, or any duty at common law, for any loss of profit or any indirect, special or consequential loss, damage, costs, expenses or other claims (whether caused by Wallatracker's negligence or the negligence of its servants or agents or otherwise) which arise out of or in connection with the provision of any goods or services by Wallatracker. Wallatracker shall not be liable or deemed to be in breach of contract by reason of any delay in performing, or failure to perform, any of its obligations if the delay or failure was due to any cause beyond its reasonable control. Notwithstanding contrary clauses in this Agreement, in the event that Wallatracker are deemed liable to you for breach of this Agreement, you agree that Wallatracker's liability is limited to the amount actually paid by you for your services or software, which amount calculated in reliance upon this clause. You hereby release Wallatracker from any and all obligations, liabilities and claims in excess of this limitation.`,
        tos_responsabilities: `Responsibilities`,
        tos_responsabilities_text: `Wallatracker is not responsible for what the user does with the user-generated content.`,
        tos_general: `General Terms and Law`,
        tos_general_text: `This Agreement is governed by the laws of Spain. You acknowledge that no joint venture, partnership, employment, or agency relationship exists between you and Wallatracker as a result of your use of these services. You agree not to hold yourself out as a representative, agent or employee of Wallatracker. You agree that Wallatracker will not be liable by reason of any representation, act or omission to act by you.`,
        tos_update: `Last updated: 17 Feb 2024`,
        footer_title: 'Check the status of your Wallapop products in seconds!',
        products_dashboard: 'Products Dashboard',
        tracks_available_on_premium: 'Only available with Premium plan',
        tracks_available_on_premium_btn: 'Change plan',
        nav_plans: 'Planes',
        signup_check_conditions_label: 'I accept the terms and conditions',
        signup_check_conditions_text: 'Consult here',
        verify: 'Verify',
        verify_verification_ongoing: `We're almost there, we're just finishing verifying your address!`,
        verify_verifycation_ok: 'You are all set, you can start tracking your products!',
        verify_verification_btn: 'Go to dashboard',
        cookies_title: 'Cookie Policy',
        cookies_date: 'Effective Date: 24 February 2024',
        cookies_introduction: 'This website uses cookies to enhance user experience. Below, we explain what cookies are, how we use them on WallaTracker, and how you can control their usage.',
        cookies_one_title: `What are cookies?`,
        cookies_one_text: `Cookies are small text files that are stored on your device when you visit a website. These files contain information that is used to improve your browsing experience, remembering your preferences and making the site more useful for you.`,
        cookies_two_title: `Types of cookies we use`,
        cookies_two_necesary: `Essential Cookies:`,
        cookies_two_necesary_one: `i18N: This cookie is necessary to store the user's language preference.`,
        cookies_two_necesary_two: `Auth: This cookie is necessary to store user authentication information, determining whether the user is authenticated or not.`,
        cookies_two_analytics: `Analytics Cookies:`,
        cookies_two_analytics_one: `    Google Analytics: We use Google Analytics to collect information about how visitors use WallaTracker. These cookies help us understand how users interact with the website, which pages are most popular, and how to improve the overall user experience. All information collected is anonymous and used solely for statistical purposes.`,
        cookies_three_title: `Cookie Control`,
        cookies_three_text: `You can control and/or delete cookies as you wish. You can delete all cookies already stored on your computer and set most browsers to block them. However, if you do this, you may have to manually adjust some preferences each time you visit WallaTracker, and some services and functionalities may not work properly.`,
        cookies_four_title: `Changes to our cookie policy`,
        cookies_four_text: `We reserve the right to amend this cookie policy at any time, so we recommend that you review it periodically. Changes and clarifications will take effect immediately upon their posting on the website.`,
        cookies_five_title: `Contact`,
        cookies_five_text: `If you have any questions about our cookie policy, you can contact us at TODO.`,
        footer_contact_title: 'Contact',
        footer_contact_claim: 'Contact me if you have any suggestions or questions!'
      },
      es: {
        welcome: 'Bienvenido',
        succesfullyRegistered: '¡Ya casi lo tienes!',
        passwordsNotMatch: 'Las contraseñas no coinciden!',
        required: 'Requerido',
        user: 'Usuario',
        password: 'Contraseña',
        repeatPassword: 'Repetir Contraseña',
        signup: 'Registrarse',
        registerFormSend: '¡Solo falta que verifiques tu dirección el correo que te hemos enviado!',
        login: 'Iniciar sesión',
        forgotPassword: '¿Olvidaste la contraseña?',
        privateProfile: 'Perfil privado',
        recipesWip: 'Recetas en curso',
        publicRecipes: 'Recetas publicas',
        seePublicPage: 'Ver página publica',
        following: 'Siguiendo',
        followers: 'Seguidores',
        editRecipe: 'Editar receta',
        avgTimeToLong: 'El tiempo promedio es demasiado largo',
        recipeSuccessfullyUpdated: '¡Receta actualizada con éxito!',
        name: 'Nombre',
        title: 'Título',
        avgTime: 'Tiempo medio',
        difficulty: 'Dificultad',
        description: 'Descripción',
        featuredImg: 'Imagen destacada',
        updatedFeaturedImg: 'Actualizar imagen destacada',
        additionalImgs: 'Imgenes adicionales',
        currentImgs: 'Imagenes actuales',
        newImgs: 'Imagenes nuevas',
        updateImgs: 'Actualizar imagenes',
        additionalNotes: 'Notas adicionales',
        ingredients: 'Ingredientes',
        tomatoes: 'Tomates',
        steps: 'Pasos',
        stepsLower: 'pasos',
        stepsPlaceholder: 'Cortamos los tomates en rodajas de unos 2 cm de ...',
        versions: 'Versiones',
        deleteVersion: 'Eliminar versión',
        versionName: 'Nombre versión',
        importNameAndIngredients: 'Importar nombre e ingredientes',
        save: 'Guardar',
        forgotPasswordTitle: 'Contraseña olvidada',
        passwordRecovered: '¡Contraseña recuperada con éxito!',
        getResetCode: 'Obtener codido de recuperación',
        resetCode: 'Codigo de recuperación',
        newPassword: 'Contraseña nueva',
        repeatNewPassword: 'Repetir contraseña nueva',
        changePassword: 'Cambiar contraseña',
        configuration: 'Configuración',
        passwordUpdated: '¡Contraseña actualizada con éxito!',
        edit: 'Editar',
        cancel: 'Cancelar',
        recommended: 'Recomendado',
        surname: 'Apellido',
        currentPassword: 'Contraseña actual',
        update: 'Actualizar',
        viewProfile: 'Ver perfil',
        addNewRecipe: 'Añadir receta nueva',
        myProfile: 'Mi perfil',
        myRecipes: 'Mis recetas',
        addRecipe: 'Crear receta',
        logout: 'Desconectar',
        logedAs: 'Iniciado como',
        previewRecipe: 'Previsualizar receta',
        publishRecipe: 'Publicar receta',
        deleteRecipe: 'Eliminar receta',
        unpublishRecipe: 'Despublicar receta',
        recipePublished: '¡Receta publicada!',
        recipeUnpublished: '¡Receta despublicada!',
        recipeDeleted: '¡Receta eliminada!',
        youFollowed: '¡Has seguido a',
        youUnfollowed: '¡Has dejado de seguir a',
        follow: 'Seguir',
        unfollow: 'Unfollow',
        recipes: 'Recetas',
        activeSince: 'Activo desde ',
        lastRecipes: 'Últimas recetas',
        home: 'Inicio',
        viewRecipe: 'Ver receta',
        favoriteRecipes: 'Recetas favoritas',
        recipeTitleRequired: 'El titulo de la receta es requerido',
        recipeSlug: 'URL de la receta',
        recipeSlugDescription: 'Esta URL se genera a partir del titulo de la receta cuando se publica',
        update_preference_daily: 'Cada día',
        update_preference_twice: 'Cada 12 horas',
        update_preference_six_hours: 'Cada 6 horas',
        update_preference_three_hours: 'Cada 3 horas',
        update_preference_one_hour: 'Cada hora',
        compare_date_last_element: 'Última sincronización',
        compare_date_twelve: '12 horas',
        compare_date_yesterday: 'Ayer',
        compare_date_three_days: 'Hace 3 días',
        compare_date_five_days: 'Hace 5 días',
        compare_date_one_week: 'Hace una semana',
        compare_date_first_element: 'Primer registro',
        username: 'Nombre de usuario',
        home_header_subtitle: 'Nuestro configurador te permite realizar el seguimiento de todos tus productos desde un mismo sitio con actualizaciones configurables',
        home_header_tag: 'Tracker #1 de Wallapop',
        home_header_adv_1: 'Actualizaciones de precio',
        home_header_adv_2: 'Número de visitas',
        home_header_adv_3: 'Crecimiento de favoritos',
        home_header_adv_4: 'Cambios de estado',
        home_header_demo_placeholder: 'Prueba añadiendo el enlace de un producto',
        home_header_try_btn: '¡Probar!',
        home_header_title: `¡Revisa el <span class="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">estado</span> de tus productos de Wallapop <span class="font-bold bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">en segundos</span>!`,
        demo_title: 'Título',
        demo_views: 'Visitas',
        demo_favs: 'Likes',
        demo_price: 'Precio',
        demo_sync: 'Fecha sync',
        demo_state: 'Estado',
        demo_items_sync_info: 'Sync info',
        demo_items_archive: 'Archivar',
        demo_items_delete: 'Eliminar',
        demo_error_product_removed: 'El producto ha sido eliminado de la plataforma',
        demo_error_try_valid: 'Pruebe con un enlace valido',
        demo_error_title: 'Ha ocurrido un error al cargar la Demo',
        demo_sync_info: 'Actualizar información',
        demo_dates_compare: 'Fecha comparación de los datos:',
        product_state_available: 'Disponible',
        product_state_sold: 'Vendido',
        product_state_reserved: 'Reservado',
        product_state_removed: 'Eliminado',
        how_it_works: '¿Cómo funciona?',
        how_subtitle: 'Empieza el seguimiento de todos tus productos hoy mismo',
        how_step_one_title: 'Introduce el enlace del producto',
        how_step_one_desc: 'Busca en Wallapop el producto al que quieres realizar el seguimiento y copia su enlace en el tracker',
        how_step_two_title: 'El bot busca la información',
        how_step_two_desc: 'Se va a realizar una búsqueda automática inicial para cargar la información del producto',
        how_step_three_title: 'Recibe actualizaciones',
        how_step_three_desc: 'Una vez cargada la información, el bot va a realizar actualizaciones periodicas para counstruir un historico de la evolución del estado del producto',
        who_title: '¿Quién debería de utilizarla?',
        who_subtitle: 'El tracker es ideal para todo tipo de perfiles',
        who_buyer: 'Compadores',
        who_buyer_text_one: '¿Quieres estar siempre al tanto de las actualizaciones de los productos que te intersan en Wallapop?',
        who_buyer_text_two: 'Simplemente introduce el enlace del producto que te interesa, y recibe información actualizada sobre cambios en su precio, visitas, favoritos y disponibilidad.',
        who_buyer_text_three: '¡Ahorra tiempo y no te pierdas ninguna oportunidad con Wallatracker!',
        who_buyer_adv_one: 'Actualizaciones constantes',
        who_buyer_adv_two: 'Decisiones informadas',
        who_buyer_adv_three: 'Ahorro de tiempo',
        who_buyer_adv_four: 'Exploración eficiente',
        who_seller: 'Vendedores',
        who_seller_text_one: '¿Quieres gestionar todos tus productos a la venta desde un mismo panel?',
        who_seller_text_two: 'Con Wallatracker podrás tomar las mejores decisiones para saber si tu producto esta bien configurado.',
        who_seller_text_three: 'Gracias a las actualizaciones constantes, podrás saber las tendencias y si tu producto se esta siendo visitado.',
        who_seller_text_four: '¡Ahorra tiempo y toma mejores decisiones!',
        who_seller_adv_one: 'Ahorro de tiempo',
        who_seller_adv_two: 'Gestión eficiente',
        who_seller_adv_three: 'Decisiones inteligentes',
        who_seller_adv_four: 'Velocidad de reacción',
        home_pricing_title: 'Precios',
        home_pricing_subtitle: 'Reduce a la mitad el tiempo de gestión de tus productos',
        home_pricing_text_one: 'Construye tu tabla de seguimiento en segundos',
        home_pricing_text_two: '¡Empieza a optimizar hoy mismo!',
        pricing_table_free_plan_title: 'Plan gratis',
        pricing_table_free_plan_adv_one: 'Actualizaciones diarias',
        pricing_table_free_plan_try_free: 'Prueba gratis',
        pricing_table_free_plan_footer: '¡Sin tarjeta!',
        pricing_table_medium_plan_title: 'Plan medio',
        pricing_table_medium_plan_adv_one: 'Actualizaciones cada 24/12/6 horas',
        pricing_table_medium_plan_try: 'Obtener plan medio ahora',
        pricing_table_no_payment_footer: 'Pago único. ¡Sin suscripción!',
        pricing_table_premium_tag: 'MÁS POPULAR',
        pricing_table_premium_title: 'Plan Premium',
        pricing_table_premium_adv_one: 'Actualizaciones cada hora',
        pricing_table_premium_adv_two: 'Sincronización manual',
        pricing_table_premium_adv_three: 'Comparación histórico',
        pricing_table_premium_try: '¡Empieza ahora!',
        new_track: 'Track nuevo',
        new_track_placeholder: 'Añade el enlace a tu producto o una lista de enlaces separados por comas',
        new_track_add: 'Añadir track',
        next_update_on: 'Proxima actualización:',
        tracks_update_tracks_info_btn: 'Sincronizar tracks',
        tracks_date_compare: 'Fecha comparación de los datos:',
        config_actual_plan: 'Plan Actual:',
        config_tracks_num: 'Número de tracks:',
        config_update_dates: 'Frecuencia sincronización:',
        config_active_since: 'Activo desde:',
        privacy_policy_title: `Política de privacidad`,
        privacy_policy_text_1: `Tu privacidad es importante para nosotros. La política de Wallatracker es respetar su privacidad con respecto a cualquier información que podamos recopilar de usted a través de nuestro sitio web, y otros sitios que poseemos y operamos`,
        privacy_policy_text_2: `Sólo pedimos información personal cuando realmente la necesitamos para prestarte un servicio. La recopilamos por medios justos y legales, con su conocimiento y consentimiento. También le informamos de por qué la recabamos y cómo se utilizará.`,
        privacy_policy_text_4: `Sólo conservamos la información recopilada durante el tiempo necesario para prestarte el servicio solicitado. Protegeremos los datos que almacenemos con medios comercialmente aceptables para evitar pérdidas y robos, así como el acceso, la divulgación, la copia, el uso o la modificación no autorizados.`,
        privacy_policy_text_5: `No compartimos ninguna información de identificación personal públicamente ni con terceros, excepto cuando lo exija la ley.`,
        privacy_policy_text_6: `Actuamos en calidad de responsable del tratamiento y encargado del tratamiento en relación con los datos personales tratados a través de Wallatracker y los servicios en términos de la legislación aplicable en materia de protección de datos, incluido el Reglamento General de Protección de Datos (RGPD) de la UE.`,
        privacy_policy_text_7: `Nuestro sitio web puede contener enlaces a sitios externos no gestionados por nosotros. Tenga en cuenta que no tenemos ningún control sobre el contenido y las prácticas de estos sitios, y no podemos aceptar responsabilidad alguna por sus respectivas políticas de privacidad`,
        privacy_policy_text_8: `Usted es libre de rechazar nuestra solicitud de información personal, entendiendo que es posible que no podamos prestarle algunos de los servicios que desea.`,
        privacy_policy_text_9: `Su uso continuado de nuestro sitio web se considerará como aceptación de nuestras prácticas en materia de privacidad e información personal. Si tiene alguna pregunta sobre cómo tratamos los datos de los usuarios y la información personal, no dude en ponerse en contacto con nosotros.`,
        privacy_policy_text_10: `Esta política es efectiva desde el 17 Feb 2024.`,      
        tos_title: `Terminos y condiciones`,
        tos_introduction: `Introducción`,
        tos_introduction_text: `Al utilizar Wallatracker confirma que acepta y se compromete a cumplir estos términos y condiciones`,
        tos_agreement: `Acuerdo con los términos y condiciones`,
        tos_agreement_text: `Este acuerdo entrará en vigor en la fecha en que utilice por primera vez la aplicación Wallatracker`,  
        tos_access: `Licencia de software de acceso ilimitado con derechos de terminación`,
        tos_access_text_one: `La Licencia de Software Wallatracker facilita la adquisición del software Wallatracker mediante una única compra, concediendo a los usuarios acceso ilimitado y perpetuo a sus completas funcionalidades. Diseñado para creadores independientes, emprendedores y pequeñas empresas, Wallatrackr permite a los usuarios seguir sus productos en línea desde una única tabla con sincronizaciones periódicas.`,
        tos_access_text_two: `Esta licencia implica un acuerdo sencillo y flexible, que exime a los usuarios de cuotas recurrentes o suscripciones. Sin embargo, es importante reconocer que el licenciante conserva el derecho a rescindir la licencia sin condiciones ni requisitos previos. Esta cláusula de rescisión permite al licenciante ejercer un control sobre la distribución y utilización del software.`,
        tos_access_text_three: 'Optar por la licencia de software Wallatracker permite a los usuarios disfrutar de las ventajas del software, al tiempo que reconoce los derechos de rescisión sin restricciones del licenciante, que proporcionan adaptabilidad y abordan posibles circunstancias imprevistas',
        tos_refunds: `Reembolsos`,
        tos_refunds_text: `Wallatracker solo ofrece reembolsos en los primeros 7 días de uso o en antes de los primeros 30 tracks.`,
        tos_disclaimer: `Disclaimer`,
        tos_disclaimer_text: 'No se garantiza que Wallatracker satisfaga sus necesidades ni que su funcionamiento sea ininterrumpido o esté libre de errores. Todas las garantías expresas e implícitas o condiciones no establecidas en el presente Acuerdo (incluyendo, sin limitación, la pérdida de beneficios, pérdida o corrupción de datos, interrupción del negocio o pérdida de contratos), en la medida en que dicha exclusión o renuncia esté permitida por la legislación aplicable quedan excluidas y expresamente rechazadas. El presente Acuerdo no afecta a sus derechos legales',
        tos_warranties: `Garantías y Limitación de Responsabilidad`,
        tos_warranties_text_one: `Wallatracker no da ninguna garantía, garantía u otro término en cuanto a la calidad, idoneidad para el propósito o de otro tipo del software. `,
        tos_warranties_text_two: `Wallatracker no será responsable ante usted por razón de cualquier representación (a menos que sea fraudulenta), o cualquier garantía implícita, condición u otro término, o cualquier deber de derecho común, por cualquier pérdida de beneficios o cualquier pérdida indirecta, especial o consecuente, daños, costes, gastos u otras reclamaciones (ya sea causada por negligencia de Wallatracker o la negligencia de sus empleados o agentes o de otra manera) que surjan de o en conexión con la prestación de cualquier bien o servicio por Wallatracker. Wallatracker no será responsable ni se considerará que ha incumplido el contrato por razón de cualquier retraso en el cumplimiento o incumplimiento de cualquiera de sus obligaciones si el retraso o incumplimiento se debiera a cualquier causa fuera de su control razonable. Sin perjuicio de las cláusulas contrarias del presente Contrato, en caso de que Wallatracker sea considerada responsable frente a Ud. por incumplimiento del presente Contrato, Ud. acepta que la responsabilidad de Wallatracker se limita al importe efectivamente abonado por Ud. por sus servicios o software, importe calculado en base a la presente cláusula. Por la presente, usted libera a Wallatracker de todas y cada una de las obligaciones, responsabilidades y reclamaciones que superen esta limitación.`,
        tos_responsabilities: `Responsabilidades`,
        tos_responsabilities_text: `Wallatracker no es responsable de lo que el usuario haga con el contenido generado por el usuario.`,
        tos_general: `Condiciones generales y legislación`,
        tos_general_text: `Este acuerdo se rige por las leyes de España. Usted reconoce que no existe ninguna relación de empresa conjunta, asociación, empleo o agencia entre usted y Wallatracker como resultado de su uso de estos servicios. Usted se compromete a no actuar como representante, agente o empleado de Wallatracker. Usted acepta que Wallatracker no será responsable de ninguna representación, acto u omisión por su parte`,
        tos_update: `Última actualización: 17 Feb 2024`,
        footer_title: '¡Revisa el estado de tus productos de Wallapop en segundos!',
        products_dashboard: 'Tabla de productos',
        tracks_available_on_premium: 'Solo disponible con plan Premium',
        tracks_available_on_premium_btn: 'Cambiar plan',
        nav_plans: 'Planes',
        signup_check_conditions_label: 'Acepto los términos y condiciones',
        signup_check_conditions_text: 'Consultar aquí',
        verify: 'Verificar',
        verify_verification_ongoing: '¡Ya casi lo tenemos, se esta terminando de verificar tu dirección!',
        verify_verifycation_ok: '¡Todo listo, ya puedes empezar a trackear tus productos!',
        verify_verification_btn: 'Ir al panel',
        cookies_title: 'Política de Cookies',
        cookies_date: 'Fecha de Entrada en Vigor: 24 Febrero 2024',
        cookies_introduction: 'Esta página web utiliza cookies para mejorar la experiencia del usuario. A continuación, explicamos qué son las cookies, cómo las utilizamos en WallaTracker y cómo puedes controlar su uso.',
        cookies_one_title: '¿Qué son las cookies?',
        cookies_one_text: 'Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. Estos archivos contienen información que se utiliza para mejorar tu experiencia de navegación, recordando tus preferencias y haciendo que el sitio sea más útil para ti.',
        cookies_two_title: 'Tipos de cookies que utilizamos',
        cookies_two_necesary: 'Cookies Esenciales:',
        cookies_two_necesary_one: 'i18N: Esta cookie es necesaria para guardar la preferencia de idioma del usuario.',
        cookies_two_necesary_two: 'Auth: Esta cookie es necesaria para guardar la información de autenticación del usuario, determinando si está autenticado o no.',
        cookies_two_analytics: 'Cookies de Análisis:',
        cookies_two_analytics_one: 'Google Analytics: Utilizamos Google Analytics para recopilar información sobre cómo los visitantes utilizan WallaTracker. Estas cookies nos ayudan a entender cómo los usuarios interactúan con el sitio web, qué páginas son más populares y cómo mejorar la experiencia general del usuario. Toda la información recopilada es anónima y se utiliza únicamente con fines estadísticos.',
        cookies_three_title: 'Control de cookies',
        cookies_three_text: 'Puedes controlar y/o eliminar las cookies según tus preferencias. Puedes eliminar todas las cookies ya almacenadas en tu ordenador y configurar la mayoría de los navegadores para que no acepten cookies. Sin embargo, si lo haces, es posible que tengas que ajustar manualmente algunas preferencias cada vez que visites WallaTracker y que algunos servicios y funcionalidades puedan no funcionar correctamente.',
        cookies_four_title: 'Cambios en nuestra política de cookies',
        cookies_four_text: 'Nos reservamos el derecho de modificar esta política de cookies en cualquier momento, por lo que te recomendamos que la revises periódicamente. Los cambios y aclaraciones surtirán efecto inmediatamente después de su publicación en el sitio web.',
        cookies_five_title: 'Contacto',
        cookies_five_text: 'Si tienes alguna pregunta sobre nuestra política de cookies, puedes contactarnos en TODO',
        footer_contact_title: 'Contacto',
        footer_contact_claim: '¿Alguna sugerencia o duda? ¡Contacta conmigo!'
      }
    }
  }))