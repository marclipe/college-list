import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { SetBreadcrumbsAction } from "../../redux/breadcrumb/action";
import { RootState } from "../../redux/root-reducer";

interface BreadcrumbProps {
  segment: string;
  path: string;
  destination: string
}

export const Breadcrumbs = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const breadcrumbs = useSelector((state: RootState) =>
    state.breadcrumbs.map((path) => ({
      segment: path,
      path,
    }))
  ) as BreadcrumbProps[];

  useEffect(() => {
    const pathSegments = location.pathname.split("/").filter((segment) => segment !== "");

    const newBreadcrumbs: BreadcrumbProps[] = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const destination = pathSegments[index];
      return { segment, path, destination };
    });

    //convert to strings
    const stringBreadcrumbs = newBreadcrumbs.map(
      (breadcrumb) => breadcrumb.path
    );
    
    dispatch(SetBreadcrumbsAction(stringBreadcrumbs));
  }, [location.pathname, dispatch]);

  const handleBreadcrumbClick = (path: string) => {
    navigate(path);
  };

  return (
    <div>
      {breadcrumbs.map((breadcrumb, index) => (
        <span key={index}>
          {index > 0 && "/"}
          <Link to="" onClick={() => handleBreadcrumbClick(breadcrumb.path)}>
            {/* {breadcrumb.segment} */}
            {index === 0 ? "home" : breadcrumb.segment}
          </Link>
        </span>
      ))}
    </div>
  );  
}