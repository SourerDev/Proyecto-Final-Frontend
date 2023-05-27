import React from 'react'
import { useParams } from 'react-router-dom'
import { getallProperties, getIdProperties } from '../../redux/actions/index.js'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux' // import useSelec
import StatisticsAdmin from './StatisticsAdmin'
import StatisticsUserPremiun from './StatisticsUserPremiun'

import callsApi from '../../services/index.js'

const Statistics = () => {
  const dispatch = useDispatch()

  const { properties, user } = useSelector((state) => state)
  const [propertiesQuantity, setPropertiesQuantity] = useState('')
  const [feedBacksLength, setFeedBacksLength] = useState(0)
  const [quantityViews, setQuantityViews] = useState(0)

  let fakeUser = {
    state: 'Desactivado',
    id_User: '073fb7d0-ccc6-49bb-ad20-cb47f2e3ae29',
    photo:
      'https://res.cloudinary.com/dtzesfyt1/image/upload/v1668008325/robot-image_xrpox8.png',
    userName: 'hermes',
    password: '$2b$10$PkXCPmCniHbIrbuhBHTCN.ahiU4X2s84Hvmc07HV6MeNSQaszyWja',
    user_auth_0: false,
    rating: '1',
    user_type: 'userPremiun',
    email: 'pfgrupo05@gmail.com',
    cellphone: '55555',
  }

  useEffect(() => {
    if (fakeUser.user_type === 'userPremiun') {
      callsApi.getProperties().then((res) => {
        const { payload } = res.data
        let filterData = payload.filter(
          (p) => p.User.id_User === fakeUser.id_User
        )
        setPropertiesQuantity(filterData)
      })
    } else if (fakeUser.user_type === 'admin') {
      callsApi.getStatictis().then((res) => {
        setPropertiesQuantity(res.data)
      })
    }
  }, [])

  let propertiesLength = propertiesQuantity.length

  return (
    <>
      {fakeUser.user_type === 'admin' && (
        <StatisticsAdmin statistics={propertiesQuantity} />
      )}
      {fakeUser.user_type === 'userPremiun' && (
        <StatisticsUserPremiun
          propertiesLength={propertiesLength}
          feedBacksLength={feedBacksLength}
          quantityViews={quantityViews}
        />
      )}
    </>
  )
}

export default Statistics
