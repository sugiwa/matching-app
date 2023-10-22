import { useEffect, useState } from "react";
import * as api from "@/libs/api";

const useGroups = () => {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGroups = async () => {
      try {
        // TODO change to the correct endpoint
        const groups = await api.get("/group");
        setGroups(groups);
        setLoading(false);
      } catch (e) {
        console.error(e);
      }
    };
    fetchGroups();
  });

  return { groups, loading };
};

export default useGroups;
