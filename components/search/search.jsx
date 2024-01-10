"use client"

import style from "./index.module.css"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useMemo, useState } from "react";

import { useRouter } from "next/navigation";

const searchParam = ['title', 'description', 'classification']

export default function Search({ allPostsData }) {

    const [searchValue, setSearchValue] = useState('')

    const handleInput = (e) => {
        setSearchValue(e.target.value)
    }

    const handleClear = () => {
        setSearchValue('')
    }

    const searchResult = useMemo(() => {
        if (searchValue === '') {
            return null;
        }
        let result = []

        allPostsData?.forEach(post => {
            for (let key of searchParam) {
                if (String(post[key]).includes(searchValue)) {
                    result.push(post)
                    break;
                }
            }
        })

        return result

    }, [searchValue])

    return (
        <div className={`${style.searchBox} ${searchValue !== '' ? ' active' : ''}`}>
            <input className={style.searchInput} type="text" value={searchValue} onChange={handleInput} required />
            {searchValue !== '' ?
                <FontAwesomeIcon style={{ cursor: 'pointer' }} icon={faXmark} size='lg' fixedWidth onClick={handleClear} />
                :
                <FontAwesomeIcon icon={faMagnifyingGlass} size='lg' fixedWidth />
            }
            <SearchContainer searchResult={searchResult} onNavigate={handleClear} />
        </div>
    )
}

function SearchContainer({ searchResult = [], onNavigate }) {

    const router = useRouter()

    if (searchResult !== null)
        return (
            <div className={style.searchContainer}>
                {searchResult.length === 0 ? <div className={style.searchPlaceholder}>无结果...</div>
                    :
                    searchResult.map((res, index) => (
                        <div key={index} className={style.searchItem} onMouseDown={() => { router.push(`/${res.classRoute}/${res.id}`); onNavigate() }}>
                            <p className={style.searchTitle}>{res.title}</p>
                            <p className={style.searchDescription}>{res.description}</p>
                        </div>
                    ))
                }
            </div>
        )
}