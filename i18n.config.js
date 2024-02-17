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
        product_state_removed: 'Eliminad',
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

      }
    }
  }))