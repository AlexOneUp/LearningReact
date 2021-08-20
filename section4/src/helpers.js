function helpful() {
    console.log('Helping')
}

function explicitExport() {
    console.log('You explicitly exported this')
}

function defaultExport() {
    console.log('You DEFAULT exported this')

}
// Only 1 EXPORT DEFAULT is available
export default defaultExport;
export { explicitExport, helpful };