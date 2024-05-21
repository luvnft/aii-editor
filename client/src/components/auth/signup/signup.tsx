import { ClerkProvider, SignInButton } from "@clerk/clerk-react";
import { useClerk } from "@clerk/clerk-react";

const SignUp = ({ changeTab }) => {
  const { signIn } = useClerk();

  const handleClerkLogin = async () => {
    try {
      window.location.href = "https://wise-magpie-0.accounts.dev/sign-in";
    } catch (err) {
      console.error("Error logging in with Clerk:", err);
    }
  };

  return (
    <div className={styles["signup"]}>
      <h1>Sign up with AI ARTIST</h1>
      <div className={styles["to-signin-box"]}>
        <span>Already have an account? </span>
        <span onClick={() => changeTab("signin")}>Sign in</span>
      </div>
      <form className={styles["signup-form"]}>
        <div className={styles["signup-form__item"]}>
          <input
            type="email"
            placeholder="Email address *"
            name="email"
            value={newUser.email}
            onChange={handleFormChange}
            required
          />
        </div>
        <div className={styles["signup-form__twins-box"]}>
          <div className={styles["signup-form__item"]}>
            <input
              type="text"
              required
              placeholder="First Name *"
              name="first_name"
              value={newUser.first_name}
              onChange={handleFormChange}
            />
          </div>
          <div className={styles["signup-form__item"]}>
            <input
              type="text"
              required
              placeholder="Last Name *"
              name="last_name"
              value={newUser.last_name}
              onChange={handleFormChange}
            />
          </div>
        </div>
        <div className={styles["signup-form__item"]}>
          <input
            type="password"
            required
            placeholder="Password *"
            name="password"
            value={newUser.password}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles["signup-form__item"]}>
          <input
            type="password"
            required
            placeholder="Retype password *"
            name="retype_password"
            value={newUser.retype_password}
            onChange={handleFormChange}
          />
        </div>
        <div className={styles["message-box"]}>{message}</div>
        <div className={styles["signup-btn"]}>
          {loading ? (
            <ButtonLoading />
          ) : (
            <>
              <button type="submit" onClick={handleFormSubmit}>
                Sign up
              </button>
              <SignInButton text="Sign in with Clerk" onClick={handleClerkLogin} />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
