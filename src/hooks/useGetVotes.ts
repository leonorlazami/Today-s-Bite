import { useEffect } from "react";
import { onValue, ref } from "firebase/database";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { db } from "../lib/firebase/firebase";
import type { VoteDataTypes } from "../stores/voteStore/voteStore.types";

export const useGetVotes = () => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const voteRef = ref(db, "votesData");

    const unsubscribe = onValue(voteRef, (snapshot) => {
      const data = snapshot.val();
      if (!data) return;
      console.log("data at first:", data);

      const formatted: VoteDataTypes[] = Object.entries(data).map(
        ([id, value]) => ({
          id,
          ...(value as VoteDataTypes),
        })
      );

      queryClient.setQueryData(["votesData"], formatted);
    });

    return () => unsubscribe();
  }, [queryClient]);

  return useQuery<VoteDataTypes[]>({
    queryKey: ["votesData"],
    queryFn: async () => [], // dummy fetcher
    staleTime: Infinity,
    enabled: false, // prevent auto fetch
  });
};
