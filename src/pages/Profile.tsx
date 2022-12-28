import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

import { useAuthContext } from "@context/useAuthContext";
import { ProfileCard, ProfileCardProps } from "@features/user/components";
import { getCurrentUser, getUser } from "@features/user/service";
import { useParams } from "react-router-dom";

interface ProfileProps {
  currentUser: boolean;
}

const Profile = ({ currentUser }: ProfileProps) => {
  const { token } = useAuthContext();
  const { username } = useParams();
  const [profileData, setProfileData] = useState<ProfileCardProps>(
    {} as unknown as ProfileCardProps
  );

  useEffect(() => {
    (async () => {
      let response: Awaited<ReturnType<typeof getCurrentUser>>;
      if (currentUser) {
        response = await getCurrentUser(token as string);
      } else {
        response = await getUser(token as string, username as string);
      }
      if (response.status === 200) {
        setProfileData(response.data);
      }
    })();
  }, [currentUser]);

  return (
    <Container style={{ maxWidth: "400px" }}>
      <ProfileCard {...profileData} />
    </Container>
  );
};

Profile.defaultProps = {
  currentUser: false,
};

export default Profile;
