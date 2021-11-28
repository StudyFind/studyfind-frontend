import React, { createContext, useMemo, useState } from "react";
import moment from "moment";

import { UserDocumentExtended } from "types/side";
import { StudyDocumentExtended } from "types/extended";
import { useStudies, useUser } from "hooks";

interface Filters {
  search: string;
  control: boolean;
  observational: boolean;
  interventional: boolean;
  hideEnrolled: boolean;
  hideSaved: boolean;
  onlySaved: boolean;
  acceptsHealthyParticipants: boolean;
  acceptsRemoteParticipants: boolean;
  conditions: string[];
}

interface Context {
  user?: UserDocumentExtended;
  filters: Filters;
  filteredStudies: StudyDocumentExtended[];
  handleFilters: (name: string, value: boolean | string | string[]) => void;
  handleAddCondition: (condition: string) => void;
  handleDeleteCondition: (index: number) => void;
  handleClearConditions: () => void;
}

interface Props {
  children: React.ReactNode;
}

export const FindStudiesContext = createContext({} as Context);

export const FindStudiesProvider = ({ children }: Props) => {
  const user = useUser();
  const studies = useStudies();

  const [filters, setFilters] = useState<Filters>({
    search: "",
    control: false,
    observational: false,
    interventional: false,
    hideEnrolled: false,
    hideSaved: false,
    onlySaved: false,
    acceptsHealthyParticipants: false,
    acceptsRemoteParticipants: false,
    conditions: [],
  });

  const handleFilters = (name: string, value: boolean | string | string[]) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddCondition = (condition: string) => {
    setFilters((prev) => {
      if (!prev.conditions.includes(condition)) {
        const updated = prev.conditions.concat(condition);
        return { ...prev, conditions: updated };
      }
      return prev;
    });
  };

  const handleDeleteCondition = (index: number) => {
    setFilters((prev) => {
      const updated = prev.conditions.filter((_, i) => i !== index);
      return { ...prev, conditions: updated };
    });
  };

  const handleClearConditions = () => {
    setFilters((prev) => ({ ...prev, conditions: [] }));
  };

  const isValidAge = (studyMinAge: number, studyMaxAge: number, userBirthdate: string) => {
    if (!studyMinAge || !studyMaxAge || !userBirthdate) {
      return true;
    }

    const userAge = moment().diff(userBirthdate, "years");
    return studyMinAge <= userAge && userAge <= studyMaxAge;
  };

  const filteredStudies = useMemo(() => {
    const filter = (studies: StudyDocumentExtended[] | undefined) => {
      if (!user || !studies) {
        return [];
      }

      return studies.filter((study) => {
        // ========== MANDATORY ==========
        if (study.researcher.id && !study.activated) return false;
        if (user.sex && ![user.sex, "All"].includes(study.sex)) return false;
        if (user.birthdate && !isValidAge(study.minAge, study.maxAge, user.birthdate)) return false;

        // ========== OPTIONAL ==========

        // FILTERS
        if (filters.acceptsHealthyParticipants && !study.acceptsHealthyParticipants) return false;
        if (filters.observational && study.type !== "Observational") return false;
        if (filters.interventional && study.type !== "Interventional") return false;
        if (filters.hideEnrolled && user.enrolled.includes(study.id)) return false;
        if (filters.hideSaved && user.saved.includes(study.id)) return false;
        if (filters.onlySaved && !user.saved.includes(study.id)) return false;

        if (filters.search) {
          const cleanedSearch = filters.search.trim().toLowerCase();
          const cleanedTitle = study.title.toLowerCase();
          const match = cleanedTitle.includes(cleanedSearch);

          if (!match) {
            return false;
          }
        }

        // CONDITIONS
        if (filters.conditions.length) {
          const intersection = study.conditions.filter((value) =>
            filters.conditions.includes(value)
          );

          if (!intersection.length) {
            return false;
          }
        }
        return true;
      });
    };

    return filter(studies);
  }, [user, studies, filters]);

  return (
    <FindStudiesContext.Provider
      value={{
        user,
        filters,
        filteredStudies,
        handleFilters,
        handleAddCondition,
        handleDeleteCondition,
        handleClearConditions,
      }}
    >
      {children}
    </FindStudiesContext.Provider>
  );
};
