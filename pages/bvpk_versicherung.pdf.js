import {useEffect} from 'react'
import {useRouter} from 'next/router'
import HeadComponent from '../components/head'

export default function Bvpk_versicherungPdf() {
    const router = useRouter()
    useEffect(() => {
        router.push('https://media.bvpk.org/versicherung/bvpk_versicherung.pdf')
    })
    return (<>
        <HeadComponent title={"BVPK Versicherung"}/>
        <div className="bg-bvpk-900 flex items-center justify-center h-screen overflow-hidden ">
            <div className="px-6 py-4 rounded">
                <div className="mb-2 text-white text-xl">
                    {' '}
                    <span className="font-bold">Redirecting</span> to media.bvpk.org
                </div>
            </div>
        </div>
    </>)
}