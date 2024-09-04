
export default async function useDirectusTokenRefresh(to = '') {
    const router = useRouter();
    const { expires, token_expired, refreshTokens } = useDirectusToken();

    const loginPath = '/login';

    if (token_expired.value) {
        console.log('Token expired, refreshing...');
        try {
            const result = await refreshTokens();
            console.log('Token refreshed', result, token_expired.value);

            if (token_expired.value) {
                console.log('Token could not be refreshed, redirecting to login');
                router.push(loginPath);
            }
        } catch (error) {
            console.log('Error refreshing token, redirecting to login', error);
            router.push(loginPath);
        }
    } else {
        console.log(`Token is valid, expires: ${new Date(expires.value).toLocaleDateString()} ${new Date(expires.value).toLocaleTimeString()} `);
    }
}