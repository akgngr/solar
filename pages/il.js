import Layout from '../components/layout'
import il from '../json/il.json'
import ilce from '../json/ilce.json'

const iller = il.map( ( il ) => {
    return (
        <ul>
            <li>{ il.id }</li>
            <li>{ il.name }</li>
        </ul>
    )
})

const ilceler = ilce.map( ( ilce ) => {
    return (
        <ul>
            <li> { ilce.id } </li>
            <li> { ilce.name } </li>
        </ul>
    )
})

export default function Home() {
    return (
        <Layout>
            <h1>Merhaba</h1>
            { iller }
            <br />

        </Layout>
    )
}
