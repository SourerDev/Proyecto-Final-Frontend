import PropTypes from 'prop-types'
import { GoogleLogin } from '@react-oauth/google'
import { ApiPropYou } from '../../services'
import { useDispatch } from 'react-redux'
import { addAuthorizationWithToken } from '../../services'
import { actionsUser } from '../../redux2.0/reducers'
import { useNavigate } from 'react-router-dom'
import { LoaderIcon } from '../../components/loaders/Loader'
import { useState } from 'react'
export function GoogleSignin({ navigateTo = '/' }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  function handleGoogleLogin({ credential }) {
    setIsLoading(true)
    ApiPropYou.googleSignin({ credential }).then(({ data }) => {
      const { user, token } = data
      dispatch(actionsUser.setUser(user))
      addAuthorizationWithToken(token)
      setIsLoading(false)
      navigate(navigateTo)
    })
  }
  return (
    <>
      <GoogleLogin
        useOneTap={true}
        onSuccess={handleGoogleLogin}
        onError={handleGoogleLogin}
      />
      {isLoading && <LoaderIcon className="fixed bottom-2 left-2 w-[48px]" />}
    </>
  )
}

GoogleSignin.propTypes = {
  navigateTo: PropTypes.string.isRequired,
}
