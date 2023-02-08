import {useEffect} from 'react'
import {useRouter} from 'next/router'
import HeadComponent from '../components/head'

export default function Petition() {
    const router = useRouter()
    useEffect(() => {
        router.push('https://www.change.org/p/schutz-und-f%C3%B6rderung-der-feuerwerkskultur')
    })
    return (<>
            <HeadComponent title={"Petition"}/>
            <div className="bg-bvpk-900 flex items-center justify-center h-screen overflow-hidden ">
                <div className="px-6 py-4 rounded">
                    <div className="mb-2 text-white text-xl">
                        {' '}
                        <span className="font-bold">Redirecting</span> to change.org
                    </div>
                </div>
            </div>
        </>)
}