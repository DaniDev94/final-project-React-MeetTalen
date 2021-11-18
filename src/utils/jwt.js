export const addToken = () => {
    const collectToken = localStorage.getItem('Token');
    if(!collectToken)  {
        return ''
    };
    const cleanUpToken = collectToken.replaceAll('"', '');
    const tokenComplet = `Bearer ${cleanUpToken}`;
    return tokenComplet;
}