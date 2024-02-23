export const initFacebookSdk = () => {
    return new Promise<void>((resolve, reject) => {
        console.log(window.FB);

        window.FB.fbAsyncInit = () => {
            console.log('Initialed')
            window.FB.init({
                appId: '2684236935073797',
                cookie: true,
                xfbml: true,
                version: 'v19.0'
            });
            resolve();

            // for autmatic login if loggedin

            // window.FB.getLoginStatus(({ authResponse }: { authResponse: any }) => {
            //     if (authResponse) {
            //         console.log(authResponse)
            //     } else {
            //         resolve();
            //     }
            // });
        };
    })
}

export const getFacebookLoginStatus = async () => {
    const response = await new Promise(window.FB.getLoginStatus)
    console.log(response)
};

export const fbLogin = async (): Promise<any> => {
    const response = await new Promise(window.FB.login);
    return response
}

export const fbLogout = async () => {
    const response = await new Promise(window.FB.logout);
    console.log(response)
}