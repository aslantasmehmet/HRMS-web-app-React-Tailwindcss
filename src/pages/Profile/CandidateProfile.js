import React, { useEffect, useState } from "react";
import { Card, Icon, Image } from "semantic-ui-react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CandidateService from "../../service/CandidateService";

export default function CandidateProfile() {
  const [cv, setCv] = useState([]);

  const { authItem } = useSelector((state) => state.auth);

  useEffect(() => {
    const candidateService = new CandidateService();
    candidateService
      .getByCandidateId(authItem[0].user.id)
      .then((result) => setCv(result.data.data));
  }, []);

  return (
    <div className="container mx-auto">
      <div>
        <Card>
          <Image src="/images/avatar/large/daniel.jpg" wrapped ui={false} />
          <Card.Content>
            <Card.Header>Daniel</Card.Header>
            <Card.Meta>Joined in 2016</Card.Meta>
            <Card.Description>
              Daniel is a comedian living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              10 Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    </div>
  );
}
