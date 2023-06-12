import PropTypes from 'prop-types'
import { GoogleLogin } from '@react-oauth/google'
import { ApiPropYou } from '../../services'
import { useDispatch } from 'react-redux'
import { addAuthorizationWithToken } from '../../services'
import { actionsUser } from '../../redux2.0/reducers'
import { useNavigate } from 'react-router-dom'

export function GoogleSignin({ navigateTo = '/' }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function handleGoogleLogin({ credential }) {
    ApiPropYou.googleSignin({ credential }).then(({ data }) => {
      const { user, token } = data
      dispatch(actionsUser.setUser(user))
      addAuthorizationWithToken(token)
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
    </>
  )
}

GoogleSignin.propTypes = {
  navigateTo: PropTypes.string.isRequired,
}
